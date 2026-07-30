## CT Protocol Manager

A React + Vite application that fetches healthcare data from OpenFDA and transforms raw CTL (Cervical–Thoracic–Lumbar) CT protocol series into a clean, structured exam layout. This project simulates real CT technologist workflow and demonstrates how backend automation can reorganize imaging series before sending exams to downstream vendor systems.

## Overview

CT scanners often generate multiple series under a single protocol (e.g., CTL Spine). These series arrive grouped together and require manual cleanup before being sent to PACS or another vendor system.

This application replicates that workflow:

Fetch raw healthcare data from OpenFDA

Display CTL exam series in their raw, unorganized state

Allow the user to click Auto Assign

Backend reorganizes the exam into Cervical, Thoracic, and Lumbar regions

Frontend displays the structured exam with correct reconstruction series

The result is a realistic simulation of how technologists prepare CT exams for radiologists.

## Real‑World Workflow Inspiration

In clinical practice:

The technologist selects a CTL protocol on the CT scanner.

The scanner produces multiple series covering:

Cervical Spine

Thoracic Spine

Lumbar Spine

All series initially appear grouped together under one exam.

Before sending the exam to PACS or another vendor system, the technologist must:

Verify exam naming

Ensure each series is placed under the correct anatomical region

Fix mis‑grouped or mislabeled series

This cleanup is often manual, requiring drag‑and‑drop adjustments.

This application automates that cleanup.

## How It Works

1. Raw CTL Series Display
   When the app loads, CTL series are shown in their raw format:

Mixed anatomical regions

Reconstructions not grouped correctly

Naming inconsistencies

This mirrors the initial state of a CT exam before technologist cleanup.

2. Auto Assign (Backend Processing)
   When the user clicks Auto Assign, the backend:

Analyzes each series

Identifies anatomical region (Cervical, Thoracic, Lumbar)

Detects reconstruction types (Axial, Sagittal, Coronal, Bone, STD)

Reorganizes the exam into three structured groups

Ensures each region contains the correct reconstruction series

This simulates how imaging departments automate protocol cleanup.

3. Structured Exam Display (Frontend)
   The frontend then renders:

Cervical Spine

Scout

Axial

Sagittal

Coronal

Bone

Thoracic Spine

Scout

Axial

Sagittal

Coronal

Bone

Lumbar Spine

Scout

Axial

Sagittal

Coronal

Bone

The UI resembles a PACS‑style protocol viewer.

## Deployment

The project is deployed at https://github.com/jruizzd/stage-1-frontend-api.git
