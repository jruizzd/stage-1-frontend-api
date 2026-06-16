export const rawExamData = [
  {
    id: "cervical",
    name: "Cervical Spine",
    region: "cervical",
    series: [
      // ALL series dumped here (wrong grouping)
      // cervical
      { id: "c-scout", name: "C-Spine Scout", type: "scout", sliceCount: 1 },
      { id: "c-bone", name: "C-Spine Bone", type: "bone", sliceCount: 120 },
      { id: "c-std", name: "C-Spine STD", type: "std", sliceCount: 150 },
      {
        id: "c-coronal",
        name: "C-Bone Coronal",
        type: "coronal",
        sliceCount: 80,
      },
      {
        id: "c-sagittal",
        name: "C-Bone Sagittal",
        type: "sagittal",
        sliceCount: 85,
      },
      { id: "c-dose", name: "Dose Report", type: "dose", sliceCount: 1 },

      // thoracic
      { id: "t-scout", name: "T-Spine Scout", type: "scout", sliceCount: 1 },
      { id: "t-bone", name: "T-Spine Bone", type: "bone", sliceCount: 200 },
      { id: "t-std", name: "T-Spine STD", type: "std", sliceCount: 220 },
      {
        id: "t-coronal",
        name: "T-Bone Coronal",
        type: "coronal",
        sliceCount: 110,
      },
      {
        id: "t-sagittal",
        name: "T-Bone Sagittal",
        type: "sagittal",
        sliceCount: 115,
      },
      { id: "t-dose", name: "Dose Report", type: "dose", sliceCount: 1 },

      // lumbar
      { id: "l-scout", name: "L-Spine Scout", type: "scout", sliceCount: 1 },
      { id: "l-bone", name: "L-Spine Bone", type: "bone", sliceCount: 180 },
      { id: "l-std", name: "L-Spine STD", type: "std", sliceCount: 190 },
      {
        id: "l-coronal",
        name: "L-Bone Coronal",
        type: "coronal",
        sliceCount: 95,
      },
      {
        id: "l-sagittal",
        name: "L-Bone Sagittal",
        type: "sagittal",
        sliceCount: 100,
      },
      { id: "l-dose", name: "Dose Report", type: "dose", sliceCount: 1 },
    ],
  },
];

export const structuredExamData = [
  {
    id: "cervical",
    name: "Cervical Spine",
    region: "cervical",
    series: [
      { id: "c-scout", name: "C-Spine Scout", type: "scout", sliceCount: 1 },
      { id: "c-bone", name: "C-Spine Bone", type: "bone", sliceCount: 120 },
      { id: "c-std", name: "C-Spine STD", type: "std", sliceCount: 150 },
      {
        id: "c-coronal",
        name: "C-Bone Coronal",
        type: "coronal",
        sliceCount: 80,
      },
      {
        id: "c-sagittal",
        name: "C-Bone Sagittal",
        type: "sagittal",
        sliceCount: 85,
      },
      { id: "c-dose", name: "Dose Report", type: "dose", sliceCount: 1 },
    ],
  },
  {
    id: "thoracic",
    name: "Thoracic Spine",
    region: "thoracic",
    series: [
      { id: "t-scout", name: "T-Spine Scout", type: "scout", sliceCount: 1 },
      { id: "t-bone", name: "T-Spine Bone", type: "bone", sliceCount: 200 },
      { id: "t-std", name: "T-Spine STD", type: "std", sliceCount: 220 },
      {
        id: "t-coronal",
        name: "T-Bone Coronal",
        type: "coronal",
        sliceCount: 110,
      },
      {
        id: "t-sagittal",
        name: "T-Bone Sagittal",
        type: "sagittal",
        sliceCount: 115,
      },
      { id: "t-dose", name: "Dose Report", type: "dose", sliceCount: 1 },
    ],
  },
  {
    id: "lumbar",
    name: "Lumbar Spine",
    region: "lumbar",
    series: [
      { id: "l-scout", name: "L-Spine Scout", type: "scout", sliceCount: 1 },
      { id: "l-bone", name: "L-Spine Bone", type: "bone", sliceCount: 180 },
      { id: "l-std", name: "L-Spine STD", type: "std", sliceCount: 190 },
      {
        id: "l-coronal",
        name: "L-Bone Coronal",
        type: "coronal",
        sliceCount: 95,
      },
      {
        id: "l-sagittal",
        name: "L-Bone Sagittal",
        type: "sagittal",
        sliceCount: 100,
      },
      { id: "l-dose", name: "Dose Report", type: "dose", sliceCount: 1 },
    ],
  },
];
