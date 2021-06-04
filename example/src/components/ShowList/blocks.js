import Message from "../Message";
import Post from "../Post";

export const blocks = [
  {
    id: "@23",
    container: <div className="message-list"></div>,
    children: [
      {
        id: "3425",
        props: {
          text: "Hi",
          author: "Name",
        },
        component: Message,
        visible: false,
      },
      {
        id: "3425",
        props: {
          text: "Ня-кавай",
          author: "Name",
        },
        component: Message,
        visible: false,
      },
    ],
    visible: false,
  },
  {
    id: "fdfd",
    props: {
      title: `Внимание!",
      author: "Внезапно тысячи нек
      накроют земную твердь
      и когда она кринет - 'Ня!'
      миллионы ответят - Смерть!`,
    },
    component: Post,
    visible: false,
  },
];
