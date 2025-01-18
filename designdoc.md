--- DESIGN (all subject to debate and change) ---
* LaTeX inspired (very official science-y)?
* A header
	- (left aligned) Profile Page, Item browsing (default page)
	- (right aligned) *SUPPLIER*

--- TECHNICALS ---
* Each user is to have an account
* ITEM struct:
	- ItemID (identifier field)
	- ItemName
	- Amount
	- BorrowedAmount
	- AvailableAmount
		> (Amount - BorrowedAmount)
* BorrowedItem
	- Each must have a due date

* USER struct
	- StudentID (identifier field)
	- StudentName
	- BorrowedItems[]
