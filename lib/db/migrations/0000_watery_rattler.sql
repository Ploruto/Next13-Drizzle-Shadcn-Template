CREATE TABLE `user` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`username` text,
	`email` varchar(256));
--> statement-breakpoint
CREATE TABLE `wordData` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`word` text,
	`successFeedback` int,
	`failureFeedback` int,
	`lastReviewDate` datetime,
	`userId` int);
--> statement-breakpoint
CREATE TABLE `wordFeeedbackEntry` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`wordDataId` int,
	`feedback` int,
	`date` datetime);
