-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hobby" TEXT NOT NULL DEFAULT 'Unknown',
ADD COLUMN     "personUrl" TEXT NOT NULL DEFAULT 'https://example.com/default.jpg';
