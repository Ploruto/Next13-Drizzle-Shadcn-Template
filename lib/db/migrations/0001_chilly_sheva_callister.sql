ALTER TABLE `wordData` MODIFY COLUMN `word` varchar(256);--> statement-breakpoint
CREATE UNIQUE INDEX `email_idx` ON `user` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `word_idx` ON `wordData` (`word`);