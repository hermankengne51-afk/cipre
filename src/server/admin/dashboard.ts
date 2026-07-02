import { createServerFn } from "@tanstack/react-start";
import { desc, eq } from "drizzle-orm";
import { db } from "@/integrations/drizzle/db";
import { requireAdminAuth } from "@/lib/auth/session";
import {
  contactMessagesTable,
  documentsTable,
  eventsTable,
  mediaItemsTable,
  newsArticlesTable,
  partnersTable,
  programsTable,
  volunteerApplicationsTable,
} from "@/integrations/drizzle/schema";

export const getDashboardStats = createServerFn({ method: "GET" }).handler(
  async () => {
    await requireAdminAuth();
    const [
      totalMessages,
      unreadMessages,
      totalVolunteers,
      newVolunteers,
      totalNews,
      publishedNews,
      totalPrograms,
      publishedPrograms,
      totalEvents,
      publishedEvents,
      totalDocuments,
      publishedDocuments,
      totalMedia,
      publishedMedia,
      totalPartners,
      publishedPartners,
      recentMessages,
      recentVolunteers,
    ] = await Promise.all([
      db.$count(contactMessagesTable),
      db.$count(contactMessagesTable, eq(contactMessagesTable.status, "new")),
      db.$count(volunteerApplicationsTable),
      db.$count(
        volunteerApplicationsTable,
        eq(volunteerApplicationsTable.status, "new"),
      ),
      db.$count(newsArticlesTable),
      db.$count(newsArticlesTable, eq(newsArticlesTable.status, "published")),
      db.$count(programsTable),
      db.$count(programsTable, eq(programsTable.status, "published")),
      db.$count(eventsTable),
      db.$count(eventsTable, eq(eventsTable.status, "published")),
      db.$count(documentsTable),
      db.$count(documentsTable, eq(documentsTable.status, "published")),
      db.$count(mediaItemsTable),
      db.$count(mediaItemsTable, eq(mediaItemsTable.status, "published")),
      db.$count(partnersTable),
      db.$count(partnersTable, eq(partnersTable.status, "published")),
      db
        .select()
        .from(contactMessagesTable)
        .orderBy(desc(contactMessagesTable.createdAt))
        .limit(5),
      db
        .select()
        .from(volunteerApplicationsTable)
        .orderBy(desc(volunteerApplicationsTable.createdAt))
        .limit(5),
    ]);

    return {
      messages: { total: totalMessages, unread: unreadMessages },
      volunteers: { total: totalVolunteers, new: newVolunteers },
      news: { total: totalNews, published: publishedNews },
      programs: { total: totalPrograms, published: publishedPrograms },
      events: { total: totalEvents, published: publishedEvents },
      documents: { total: totalDocuments, published: publishedDocuments },
      media: { total: totalMedia, published: publishedMedia },
      partners: { total: totalPartners, published: publishedPartners },
      recentMessages,
      recentVolunteers,
    };
  },
);
