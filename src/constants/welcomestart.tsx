export const formWelcomeElements = [
  {
    label: "Avatar",
    type: "input" as const,
    item: {
      placeholder: "What will be your avatar?",
      name: "avatar",
      defaultValue: "Test",
    },
  },
  {
    label: "Game Types",
    type: "select" as const,
    item: {
      placeholder: "What kind of game do you like yo play?",
      name: "style",
      defaultValue: "Test",
      options: [
        {
          label: "With Numbers",
          value: "numbers",
        },
        {
          label: "With Vowels",
          value: "vowels",
        },
        {
          label: "With Words",
          value: "words",
        },
        {
          label: "With Images",
          value: "images",
        },
      ],
    },
  },
];
