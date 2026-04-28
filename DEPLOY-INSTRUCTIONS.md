# Hideaway Resort Website — Deploy Instructions

This site is deployed to **Cloudflare Pages** (project: `hideaway-resort-website`), which serves `hideawayresort.com`. Deploy with `wrangler pages deploy` — *not* `wrangler deploy` (the latter creates a separate Worker that does not update the production domain).

Run these steps in order with Claude Code to download resort photos, replace the hero video, and deploy.

## Step 1: Download Resort Photos from Guesty CDN

The resort photos have been updated in `src/data/photos.ts` to reference local paths under `/images/resort/`. Download each image from the Guesty CDN to `public/images/resort/`:

```bash
mkdir -p public/images/resort

# Guesty CDN base: https://assets.guesty.com/image/upload/{transforms}/production/622b8ecf00b0600033aa051e/{imageId}.jpg
# Using w_1200,h_800,c_fill,q_auto,f_auto transforms for high quality

curl -o public/images/resort/pool-1.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/oihienmlwzmip37dep5z.jpg"

curl -o public/images/resort/dock-1.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/wxeklidqp6y8i9tkezr5.jpg"

curl -o public/images/resort/dock-2.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/mtq9fvk9riok5mfkxzg3.jpg"

curl -o public/images/resort/firepit-1.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/n3l0qokhqxyydvpd0pgn.jpg"

curl -o public/images/resort/lake-1.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/si6tgf02lg3zmskhoosp.jpg"

curl -o public/images/resort/lake-2.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/d1u4d9igfccw6vwy6x5b.jpg"

curl -o public/images/resort/lake-3.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/bu7lop8l4vmevjhjrstt.jpg"

curl -o public/images/resort/grounds-1.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/rbaeqownylbsmyu0vavt.jpg"

curl -o public/images/resort/grounds-2.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/z1guuv2x4vze02tpsque.jpg"

curl -o public/images/resort/grounds-3.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/qeqoknr7ghbiboy4u3q3.jpg"

curl -o public/images/resort/recreation-1.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/cbicelz882wmd5rduc9x.jpg"

curl -o public/images/resort/recreation-2.jpg "https://assets.guesty.com/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/production/622b8ecf00b0600033aa051e/hqcq9igu0qhgcyryikqc.jpg"
```

After downloading, verify all 12 files exist and are non-zero:
```bash
ls -la public/images/resort/
```

## Step 2: Copy Hero Video

The hero video is "Beautiful Ozark Mountains Wilderness" from iStock (ID: 1343581322) — aerial drone footage of the Ozark Mountains and Table Rock Lake, daytime.

The purchased video is in the user's Downloads folder as `iStock-1343581322.mp4`. Copy it to `public/hero-video.mp4`:
```bash
cp ~/Downloads/iStock-1343581322.mp4 public/hero-video.mp4

# Verify it copied
ls -la public/hero-video.mp4
```

## Step 3: Verify Downloaded Images

Open a few of the downloaded images to make sure they show the right content:
- `pool-1.jpg` should show a swimming pool
- `dock-1.jpg` should show a dock with boats on the lake
- `lake-1.jpg` should show a lake view with dock and hills
- `grounds-1.jpg` should show a pavilion/picnic area

If any image looks wrong (wrong content or shows an error page), check the Guesty photo IDs by browsing the Lake Life Cabin listing at: https://app.guesty.com/properties/695c23b8aeefdd00146f17bd/photos

## Step 4: Build and Deploy

```bash
rm -rf node_modules/.vite
npm install
npm run build
npx wrangler pages deploy dist/client --project-name=hideaway-resort-website
```

## Step 5: Verify Live Site

After deployment, check:
1. **Homepage** (hideawayresort.com) — hero video plays, lake photo in location section loads
2. **Amenities** (/amenities) — pool and dock photos load
3. **Gallery** (/gallery) — all resort photos show in the grid
4. **Location** (/location) — lake photo loads

## Photo ID Reference

| Local filename | Guesty Photo ID | Description |
|---|---|---|
| pool-1.jpg | oihienmlwzmip37dep5z | Swimming pool |
| dock-1.jpg | wxeklidqp6y8i9tkezr5 | Dock with boats on lake |
| dock-2.jpg | mtq9fvk9riok5mfkxzg3 | Covered deck overlooking lake |
| firepit-1.jpg | n3l0qokhqxyydvpd0pgn | Fire pit area with grounds |
| lake-1.jpg | si6tgf02lg3zmskhoosp | Lake view with dock and hills |
| lake-2.jpg | d1u4d9igfccw6vwy6x5b | Lakefront seating with chairs |
| lake-3.jpg | bu7lop8l4vmevjhjrstt | Wider resort/lake view |
| grounds-1.jpg | rbaeqownylbsmyu0vavt | Covered picnic pavilion |
| grounds-2.jpg | z1guuv2x4vze02tpsque | Covered patio and lawn area |
| grounds-3.jpg | qeqoknr7ghbiboy4u3q3 | Resort entrance sign |
| recreation-1.jpg | cbicelz882wmd5rduc9x | Playground under trees |
| recreation-2.jpg | hqcq9igu0qhgcyryikqc | Additional recreation area |

All photos are sourced from the Lake Life Cabin listing in Guesty (property ID: 695c23b8aeefdd00146f17bd).
