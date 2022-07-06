(() => {
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(name, gender, birthday);
      this.lastAccess = new Date();
    }

    checkCredential() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(email, role, name, gender, birthday);
    }
  }

  const userSettings = new UserSettings(
    "/user/home",
    "/home",
    "leonelrivas.rl@gmail.com",
    "Admin",
    "Leonel",
    "M",
    new Date("2000-02-22")
  );
  console.log({
    userSettings,
  });
})();
