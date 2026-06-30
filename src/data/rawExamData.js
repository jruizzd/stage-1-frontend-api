export const rawExamData = [
  {
    id: "cervical",
    name: "Cervical Spine",
    region: "cervical",
    series: [
      { id: "c-scout", name: "C-Spine Scout", type: "scout", sliceCount: 1 },
      { id: "c-axial", name: "C-Spine Axial", type: "axial", sliceCount: 150 },
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

      { id: "t-scout", name: "T-Spine Scout", type: "scout", sliceCount: 1 },
      { id: "t-axial", name: "T-Spine Axial", type: "axial", sliceCount: 220 },
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

      { id: "l-scout", name: "L-Spine Scout", type: "scout", sliceCount: 1 },
      { id: "l-axial", name: "L-Spine Axial", type: "axial", sliceCount: 190 },
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
