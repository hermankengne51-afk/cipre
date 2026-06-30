CREATE INDEX "contact_messages_status_created_at_idx" ON "cipre_contact_messages" USING btree ("status","created_at");--> statement-breakpoint
CREATE INDEX "documents_status_published_at_idx" ON "cipre_documents" USING btree ("status","published_at");--> statement-breakpoint
CREATE INDEX "documents_category_language_idx" ON "cipre_documents" USING btree ("category","language","status");--> statement-breakpoint
CREATE INDEX "events_status_start_date_idx" ON "cipre_events" USING btree ("status","start_date");--> statement-breakpoint
CREATE INDEX "media_type_status_idx" ON "cipre_media_items" USING btree ("type","status","published_at");--> statement-breakpoint
CREATE INDEX "media_gallery_status_idx" ON "cipre_media_items" USING btree ("gallery","status");--> statement-breakpoint
CREATE INDEX "news_status_published_at_idx" ON "cipre_news_articles" USING btree ("status","published_at");--> statement-breakpoint
CREATE INDEX "news_category_status_idx" ON "cipre_news_articles" USING btree ("category","status");--> statement-breakpoint
CREATE INDEX "partners_type_status_idx" ON "cipre_partners" USING btree ("type","status");--> statement-breakpoint
CREATE INDEX "programs_status_published_at_idx" ON "cipre_programs" USING btree ("status","published_at");--> statement-breakpoint
CREATE INDEX "programs_category_status_idx" ON "cipre_programs" USING btree ("category","status");--> statement-breakpoint
CREATE INDEX "volunteer_applications_status_created_at_idx" ON "cipre_volunteer_applications" USING btree ("status","created_at");--> statement-breakpoint
CREATE INDEX "volunteer_applications_area_status_idx" ON "cipre_volunteer_applications" USING btree ("area_of_interest","status");