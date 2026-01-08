-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Comic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "issue" TEXT,
    "publisher" TEXT,
    "year" INTEGER,
    "condition" TEXT,
    "graded" BOOLEAN NOT NULL DEFAULT false,
    "gradingCompany" TEXT,
    "grade" REAL,
    "notes" TEXT,
    "imageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "EbayListing" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ebayItemId" TEXT NOT NULL,
    "comicId" TEXT,
    "title" TEXT NOT NULL,
    "currentPrice" REAL NOT NULL,
    "listingType" TEXT NOT NULL DEFAULT 'fixed',
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "listingUrl" TEXT,
    "imageUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'active',
    "listedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "EbayListing_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "Comic" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SoldListing" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ebayItemId" TEXT,
    "title" TEXT NOT NULL,
    "searchQuery" TEXT NOT NULL,
    "soldPrice" REAL NOT NULL,
    "shippingPrice" REAL,
    "totalPrice" REAL,
    "condition" TEXT,
    "soldDate" DATETIME,
    "sellerName" TEXT,
    "listingUrl" TEXT,
    "imageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "PriceAlert" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "listingId" TEXT NOT NULL,
    "soldListingId" TEXT,
    "comicId" TEXT,
    "currentPrice" REAL NOT NULL,
    "soldPrice" REAL NOT NULL,
    "priceDiff" REAL NOT NULL,
    "percentDiff" REAL NOT NULL,
    "suggestedPrice" REAL,
    "newPrice" REAL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "confirmedAt" DATETIME,
    "appliedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PriceAlert_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "EbayListing" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PriceAlert_soldListingId_fkey" FOREIGN KEY ("soldListingId") REFERENCES "SoldListing" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "PriceAlert_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "Comic" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ScanJob" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "listingsFound" INTEGER NOT NULL DEFAULT 0,
    "alertsCreated" INTEGER NOT NULL DEFAULT 0,
    "startedAt" DATETIME,
    "completedAt" DATETIME,
    "error" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EbayListing_ebayItemId_key" ON "EbayListing"("ebayItemId");
