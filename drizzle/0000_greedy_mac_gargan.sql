CREATE TABLE "cipre_contact_messages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50),
	"organization" varchar(255),
	"subject" varchar(255) NOT NULL,
	"message" text NOT NULL,
	"status" varchar(50) DEFAULT 'new' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" varchar(256) DEFAULT 'system',
	"updated_by" varchar(256) DEFAULT 'system'
);
--> statement-breakpoint
CREATE TABLE "cipre_documents" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title_fr" varchar(255) NOT NULL,
	"title_en" varchar(255) NOT NULL,
	"category" varchar(100) NOT NULL,
	"file_url" varchar(2048) NOT NULL,
	"language" varchar(10) DEFAULT 'fr' NOT NULL,
	"status" varchar(20) DEFAULT 'draft' NOT NULL,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" varchar(256) DEFAULT 'system',
	"updated_by" varchar(256) DEFAULT 'system'
);
--> statement-breakpoint
CREATE TABLE "cipre_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(255) NOT NULL,
	"title_fr" varchar(255) NOT NULL,
	"title_en" varchar(255) NOT NULL,
	"description_fr" text NOT NULL,
	"description_en" text NOT NULL,
	"location" varchar(255),
	"start_date" timestamp with time zone NOT NULL,
	"end_date" timestamp with time zone,
	"cover_image_url" text,
	"status" varchar(20) DEFAULT 'draft' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" varchar(256) DEFAULT 'system',
	"updated_by" varchar(256) DEFAULT 'system',
	CONSTRAINT "cipre_events_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "cipre_media_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" varchar(20) DEFAULT 'image' NOT NULL,
	"title_fr" varchar(255) NOT NULL,
	"title_en" varchar(255) NOT NULL,
	"url" varchar(2048) NOT NULL,
	"thumbnail_url" varchar(2048),
	"gallery" varchar(100),
	"status" varchar(20) DEFAULT 'draft' NOT NULL,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" varchar(256) DEFAULT 'system',
	"updated_by" varchar(256) DEFAULT 'system'
);
--> statement-breakpoint
CREATE TABLE "cipre_news_articles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(255) NOT NULL,
	"title_fr" varchar(255) NOT NULL,
	"title_en" varchar(255) NOT NULL,
	"excerpt_fr" text NOT NULL,
	"excerpt_en" text NOT NULL,
	"content_fr" text,
	"content_en" text,
	"category" varchar(100) NOT NULL,
	"cover_image_url" text,
	"author" varchar(255),
	"status" varchar(20) DEFAULT 'draft' NOT NULL,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" varchar(256) DEFAULT 'system',
	"updated_by" varchar(256) DEFAULT 'system',
	CONSTRAINT "cipre_news_articles_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "cipre_partners" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"logo_url" varchar(2048),
	"website_url" varchar(2048),
	"type" varchar(50) DEFAULT 'partenaire' NOT NULL,
	"country" varchar(100),
	"status" varchar(20) DEFAULT 'draft' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" varchar(256) DEFAULT 'system',
	"updated_by" varchar(256) DEFAULT 'system'
);
--> statement-breakpoint
CREATE TABLE "cipre_programs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(255) NOT NULL,
	"title_fr" varchar(255) NOT NULL,
	"title_en" varchar(255) NOT NULL,
	"summary_fr" text NOT NULL,
	"summary_en" text NOT NULL,
	"content_fr" text,
	"content_en" text,
	"category" varchar(100) NOT NULL,
	"cover_image_url" text,
	"status" varchar(20) DEFAULT 'draft' NOT NULL,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" varchar(256) DEFAULT 'system',
	"updated_by" varchar(256) DEFAULT 'system',
	CONSTRAINT "cipre_programs_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "cipre_volunteer_applications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"country" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"area_of_interest" varchar(100) NOT NULL,
	"availability" varchar(50) NOT NULL,
	"experience" text,
	"motivation" text NOT NULL,
	"status" varchar(50) DEFAULT 'new' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" varchar(256) DEFAULT 'system',
	"updated_by" varchar(256) DEFAULT 'system'
);
