CREATE TABLE "cipre_admin_users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"password_hash" varchar(512) NOT NULL,
	"role" varchar(20) DEFAULT 'ADMIN' NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" varchar(256) DEFAULT 'system',
	"updated_by" varchar(256) DEFAULT 'system',
	CONSTRAINT "cipre_admin_users_email_unique" UNIQUE("email")
);
