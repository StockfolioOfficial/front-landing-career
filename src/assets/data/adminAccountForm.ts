const AdminDataForm = {
  accountInput: {
    item: [
      {
        id: 0,
        name: "이름",
        title: "username",
        placeholder: "이름",
        itemWidth: 120,
      },
      {
        id: 1,
        name: "아이디",
        title: "email",
        placeholder: "아이디",
        itemWidth: 240,
      },
      {
        id: 2,
        name: "비밀번호",
        title: "password",
        placeholder: "비밀번호",
        itemWidth: 240,
      },
    ],
    account: [
      { id: 0, name: "김명성", email: "sstaar91", password: "2%wpaae" },
      { id: 1, name: "고유영", email: "goyuyoung", password: "2%wpaae" },
    ],
  },
  notificationInput: {
    item: [
      {
        id: 0,
        title: "제목",
        name: "title",
        placeholder: "제목",
        itemWidth: 980,
      },
    ],
  },
  NotificationUploadDropdown: {
    data: [
      { id: 0, title: "경력", itemWidth: 124, list: ["신입", "경력", "인턴"] },
      { id: 1, title: "형태", itemWidth: 148, list: ["정규직", "계약직"] },
      { id: 2, title: "마감일", itemWidth: 180, list: [] },
      {
        id: 3,
        title: "직종",
        itemWidth: 192,
        list: [
          "개발",
          "디자인",
          "운영",
          "마케팅",
          "영업",
          "기획",
          "크리에이터",
        ],
      },
    ],
  },
};

export default AdminDataForm;
