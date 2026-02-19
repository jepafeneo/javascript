import { mapUserNames } from "../js/logic.js";

describe("mapUserNames", function () {
  it("devuelve solo los nombres", function () {
    const users = [
      { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
      { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
      { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
    ];

    // const userNames = ["Leanne Graham", "Ervin Howell", "Clementine Bauch"];
    const userNames = users.map((user) => user.name);

    assert.deepEqual(mapUserNames(users), userNames);
  });

  it("si recibe array vacío, devuelve array vacío", function () {
    assert.deepEqual(mapUserNames([]), []);
  });
});
