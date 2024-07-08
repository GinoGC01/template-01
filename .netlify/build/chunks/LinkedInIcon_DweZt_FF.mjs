import { jsx } from 'react/jsx-runtime';

const team = [
  {
    id: "Nombre-Apellido-1",
    nombre: "Nombre Apellido 1",
    especialidades: ["Abogado Penalista"],
    posicion: "Socio",
    jurisdiccion: ["Republica Argentina", "Arg"],
    carreras: [
      {
        carrera: "nombre carrera",
        universidad: ["Universidad", "Uni."],
        titulo: "Título",
        especialidad: "Especialidad",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos enim ut amet ipsa corrupti, quam asperiores doloremque sequi nihil voluptatibus magni ipsam quidem",
      },
      {
        carrera: "nombre carrera",
        universidad: ["Universidad", "Uni."],
        titulo: "Título",
        especialidad: "Especialidad",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos enim ut amet ipsa corrupti, quam asperiores doloremque sequi nihil voluptatibus magni ipsam quidem",
      },
    ],
    biografia:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos enim ut amet ipsa corrupti, quam asperiores doloremque sequi nihil voluptatibus magni ipsam quidem",
    objetivos: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
    valores: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
    palabrasClaves: [],
    images: ["../../../images/temp/abogado-ej-01.webp"],
    presentacion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos enim ut amet",
    contact: {
      rrss: [
        { redSocial: "Facebook", url: "url", username: "Username" },
        { redSocial: "LinkedIn", url: "url", username: "Username" },
      ],
      contactPhone: "1130269814",
      email: "email@example.com",
    },
  },
  {
    id: "Nombre-Apellido-2",
    nombre: "Nombre Apellido 2",
    especialidades: ["Especialidad"],
    posicion: "Socio",
    jurisdiccion: ["Republica Argentina", "Arg"],
    carreras: [
      {
        carrera: "nombre carrera",
        universidad: ["Universidad", "Uni."],
        titulo: "Título",
        especialidad: "Especialidad",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos enim ut amet ipsa corrupti, quam asperiores doloremque sequi nihil voluptatibus magni ipsam quidem",
      },
    ],
    biografia:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos enim ut amet ipsa corrupti, quam asperiores doloremque sequi nihil voluptatibus magni ipsam quidem",
    objetivos: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
    valores: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
    palabrasClaves: [],
    images: ["../../../images/temp/abogado-ej-02.webp"],
    presentacion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos enim ut amet",

    contact: {
      rrss: [
        { redSocial: "Facebook", url: "url", username: "Username" },
        { redSocial: "LinkedIn", url: "url", username: "Username" },
      ],
      contactPhone: "1130269814",
      email: "email@example.com",
    },
  },
  {
    id: "Nombre-Apellido-3",
    nombre: "Nombre Apellido 3",
    especialidades: ["Abogado Penalista"],
    posicion: "Socio",
    jurisdiccion: ["Republica Argentina", "Arg"],
    carreras: [
      {
        carrera: "nombre carrera",
        universidad: ["Universidad", "Uni."],
        titulo: "Título",
        especialidad: "Especialidad",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos enim ut amet ipsa corrupti, quam asperiores doloremque sequi nihil voluptatibus magni ipsam quidem",
      },
      {
        carrera: "nombre carrera",
        universidad: ["Universidad", "Uni."],
        titulo: "Título",
        especialidad: "Especialidad",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos enim ut amet ipsa corrupti, quam asperiores doloremque sequi nihil voluptatibus magni ipsam quidem",
      },
    ],
    biografia:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos enim ut amet ipsa corrupti, quam asperiores doloremque sequi nihil voluptatibus magni ipsam quidem",
    objetivos: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
    valores: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
    palabrasClaves: [],
    images: ["../../../images/temp/abogado-ej-01.webp"],
    presentacion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos enim ut amet",
    contact: {
      rrss: [
        { redSocial: "Facebook", url: "url", username: "Username" },
        { redSocial: "LinkedIn", url: "url", username: "Username" },
      ],
      contactPhone: "1130269814",
      email: "email@example.com",
    },
  },
];

function EmailIcon() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
        }
      )
    }
  );
}

function Facebook() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z",
          fill: "currentColor"
        }
      )
    }
  );
}

function LinkedIn() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
        }
      )
    }
  );
}

export { EmailIcon as E, Facebook as F, LinkedIn as L, team as t };
