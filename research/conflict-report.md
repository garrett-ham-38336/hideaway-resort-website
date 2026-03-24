# Hideaway Resort — Conflict Report
**Generated:** 2026-03-24 (Revised)

---

## RESOLVED ISSUES

The following items from the original report have been resolved:

1. **"Units not in Guesty"** — RESOLVED. All units are in Guesty. The original audit missed 9 properties due to a virtual scrolling limitation. A full search confirmed 15 properties total (12 active, 1 inactive, 2 unlisted special listings).

2. **"No booking URLs on stay.weekendermanagement.com"** — RESOLVED. The booking engine works via `https://stay.weekendermanagement.com/en/properties/{guesty_id}`. Confirmed working with Lake Life Cabin.

3. **"Guesty listings are mostly unpopulated"** — RESOLVED. All audited listings have fully populated descriptions, amenities, rooms & beds, photos, and policies. The original audit only checked one tab of one listing.

4. **"Missing policies"** — RESOLVED. Policies are defined in the Guesty descriptions (Other Things to Note section) for each listing. See guesty-inventory.md for the full extracted policy set.

5. **"Existing booking system ownership"** — RESOLVED per Garrett. The new site should reference Weekender Management. Contact email: info@weekendermanagement.com.

---

## REMAINING DECISIONS NEEDED

### Issue #1: Listing Title Convention for the New Website

The Guesty titles vary slightly in format:

| Unit | Guesty Title |
|---|---|
| Lake Life Cabin | Lake Life Cabin - Lakefront Table Rock Lake |
| Clear Water Cabin | Clear Water Cabin · Table Rock Lakefront |
| Big Fish Cabin | Big Fish Cabin - Lakefront on Table Rock Lake |
| Dogwood Cabin | Dogwood Cabin - Lakefront on Table Rock Lake |
| Blue Heron Cabin | Blue Heron · Lakefront Cabin · Pool & Dock |
| Crest View Cabin | Crest View Cabin - Lakefront Table Rock Lake |
| Red Cedar Cabin | Red Cedar Cabin - Lakefront Table Rock Lake |
| Skyline Cabin | Skyline Cabin - Lakefront Table Rock Lake |
| Trails End Cabin | Trails End Cabin - Lakefront Table Rock Lake |
| Rock Haven Cottage | Rock Haven Cottage - Lakefront Table Rock Lake |
| The Lodge | The Lodge - Lakefront Table Rock Lake |
| Love Shack | Love Shack Cabin · Lakefront · Pool & Dock |

**Decision needed:**
- A) Use the full Guesty title as-is (inconsistent separators: some use " - ", some use " · ")
- B) Use just the cabin name (e.g., "Lake Life Cabin") — clean and simple
- C) Standardize to "[Name] - Lakefront Table Rock Lake" for all units
- D) Custom — tell me your preference

**Recommendation:** Option C provides the best SEO value while keeping consistency.

---

### Issue #2: "The Lodge" vs. "Hideaway Lodge"

- **Guesty name:** "The Lodge"
- **Existing website name:** "Hideaway Lodge"

**Decision needed:** Which name should the new website use?

---

### Issue #3: Duplex Cabin and Entire Resort Listings

Two Guesty listings do NOT appear on the existing website:

1. **Lakeside Duplex Cabin · Sleeps 16 · Pet Friendly** (Unlisted) — This may be the consolidated duplex that absorbed Shoreline Cabin.
2. **Rent-A-Lake Resort at Hideaway Resort** (Unlisted) — A whole-resort booking option.

**Decision needed:**
- Should either or both of these appear on the new website?
- If the Duplex Cabin is bookable, I'll need to build a page for it.
- If Rent-A-Lake is a real offering, it could be a strong selling point for large groups/reunions.

---

### Issue #4: Skyline & Trails End Combo Listing

The existing website has a "Skyline & Trails End" combo listing (4BR / 2BA, sleeps 16). This does NOT exist as a separate listing in Guesty.

**Decision needed:**
- Should the new website include a combo listing page for Skyline & Trails End?
- If yes, I'll build it from the two individual listings and link to both booking pages (or a custom arrangement).

---

### Issue #5: Family Reunion Page

The existing website mentions "Family Reunion" accommodations (combining Cabins 3-8). There is no equivalent in Guesty.

**Decision needed:**
- Should the new site have a Family Reunion / Group Booking page?
- This could tie into the Rent-A-Lake listing if that's an active offering.

---

## MINOR DISCREPANCIES

### Capacity Variations (Existing Site vs. Guesty Header Data)
- **Rock Haven Cottage:** Listed as 1BR/1BA but sleeps 6 (most 1BR units sleep 4). Guesty confirms sleeps 6 — this is correct and likely due to a sofa bed or extra sleeping space.
- **Crest View, Skyline, Trails End:** All 2BR/1BA but sleep 8 (other 2BR units like Big Fish and Dogwood sleep 6). This is consistent between the existing site and Guesty.

These are not errors — just natural variation in unit layouts.

### Contact Information
- **Resolved:** New site will use info@weekendermanagement.com
- **Phone:** 417-538-2992 (from existing site) — confirm this is still the correct number, or should it be the Weekender Management number (+1 479-364-6756 shown on the booking engine)?

### Copyright Footer
- **Resolved:** New site will reference Weekender Management (not Branson Vacation Rentals, LLC)

---

## NEXT STEPS

Once you provide decisions on the 5 remaining items above, I will:
1. Finalize the `master-content.md` with all resolved content
2. Proceed to Phase 1 (project setup)
