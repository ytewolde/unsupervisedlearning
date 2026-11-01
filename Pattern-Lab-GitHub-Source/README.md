# Pattern Lab (formerly Cluster Lab)

Browser-local unsupervised learning studio, version 1.0.0.

## Run
Serve `dist/` from an HTTPS static host or localhost. For a local developer preview:

    python -m http.server 8000 --directory dist

Open http://localhost:8000 . Do not open index.html directly with file://; module workers need an origin. No runtime external requests or student accounts are needed by the app. Hosted access follows the Site’s sharing settings; verify classroom access before teaching.

## Contents
- dist/core.js: pure numerical/data functions
- dist/data.js: deterministic synthetic datasets
- dist/worker.js: background fitting and t-SNE
- dist/vendor/tsne.js: upstream tSNEJS, content-hash pinned, unchanged
- dist/view3d.js: orthographic 3D projection and rotation
- dist/definitions.js: student vocabulary definitions
- dist/app.js: workflow, evidence, persistence, exports
- dist/style.css: responsive and print styles
- dist/guide.html: teacher guide, mathematical notes, limitations
- dist/test-report.html: actual test results
- tests/: numerical, DOM, worker checks and independent sklearn reference

## Reproduce tests
Install developer dependencies with `npm ci`; run `npm test`.
To regenerate references, Python requires numpy and scikit-learn 1.8.0: `python tests/reference.py`.
Test environment: Node v24.19.0, jsdom 26.1.0, sklearn 1.8.0.

57 checks passed. These are numerical/data, DOM, and Node worker tests; not browser tests. On 26 October 2026, cloud Chrome checks verified NEA sample loading, preprocessing, actual worker fitting, and desktop light/dark appearance. Tablet, browser download/print, and assistive technology checks remain unverified. See the report for actual expected/observed results.

## Dependency pinning
Runtime tSNEJS upstream source: https://github.com/karpathy/tsnejs (MIT).
SHA256: 70a7d6cd823fdc707c91b7cfa0036cd59a2199de6d5b7af9bb1f1081325a77f1
All runtime assets are bundled. jsdom 26.1.0 is developer-only and locked in package-lock.json.

## Evidence
Saved runs are immutable snapshots. Active names and writing can continue changing. Download a full project for portable backup; fitted model JSON preserves centers/preprocessing for assignment only. Browser localStorage is not cloud storage or a submission system.

## Real data and appearance
Palmer Penguins (CC0) and UCI Auto MPG (CC BY 4.0) are bundled alongside synthetic samples. See dist/DATA-SOURCES.md for source URLs, attribution, transformations and file hashes. No runtime Kaggle account or download is needed. Theme controls are in dist/theme.js; sun/moon controls select light/dark appearance independently of project state; system preference is used before an explicit choice. Legacy project schema and localStorage keys intentionally retain cluster-lab identifiers for compatibility.

Singapore air quality: bundled NEA extract of 500 Central-region records (1–22 January 2024), five pollutant features. See DATA-SOURCES.md for attribution and transformations. Blue interface accents replace orange; cluster colors retain their separate palette.

## Explorer update — 28 October 2026
Search and inspect source examples, original feature values and units; highlight five nearest neighbors calculated in fitted feature space. Expanded view supports Escape and keyboard focus cycling. Selection is temporary; model assignments and saved runs are unchanged. 59 automated checks passed. Chrome verified search, neighbor display, expanded view/Escape, K=3 versus K=5 snapshots, names, two predictions, project/model/CSV downloads, and project reload. Report download timed out despite success notice; tablet, print and comprehensive accessibility checks remain unverified.

## 31 October 2026 screen update
Functional five-stage screens now include real feature histograms/previews, training diagnostics, cluster-member filtering/inspection and a calculated Model Card. Run `npm test` for 69 checks. See `dist/design-integration.md` for actual browser results and verification limits. No runtime dependency or mathematical-algorithm change. `screens.js` contains the new view components and measured distribution/correlation helpers.
