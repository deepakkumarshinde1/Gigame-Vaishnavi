const seedUsers = async (User) => {
  const count = await User.count();

  if (count > 0) {
    console.log("ℹ️ User seed skipped (data already exists)");
    return;
  }

  await User.bulkCreate([
    {
      username: "john_doe",
      email: "john.doe@gmail.com",
      password: "$2b$10$johnhash123",
      profile_pic: "/uploads/users/john.jpg",
    },
    {
      username: "jane_smith",
      email: "jane.smith@gmail.com",
      password: "$2b$10$janehash123",
      profile_pic: "/uploads/users/jane.jpg",
    },
    {
      username: "rohit_patil",
      email: "rohit.patil@gmail.com",
      password: "$2b$10$rohithash123",
      profile_pic: "/uploads/users/rohit.jpg",
    },
    {
      username: "amit_sharma",
      email: "amit.sharma@gmail.com",
      password: "$2b$10$amithash123",
      profile_pic: "/uploads/users/amit.jpg",
    },
    {
      username: "priya_kulkarni",
      email: "priya.k@gmail.com",
      password: "$2b$10$priyahash123",
      profile_pic: "/uploads/users/priya.jpg",
    },
    {
      username: "neha_joshi",
      email: "neha.joshi@gmail.com",
      password: "$2b$10$nehahash123",
      profile_pic: "/uploads/users/neha.jpg",
    },
    {
      username: "sachin_more",
      email: "sachin.more@gmail.com",
      password: "$2b$10$sachinhash123",
      profile_pic: "/uploads/users/sachin.jpg",
    },
    {
      username: "ankit_verma",
      email: "ankit.verma@gmail.com",
      password: "$2b$10$ankithash123",
      profile_pic: "/uploads/users/ankit.jpg",
    },
    {
      username: "pooja_desai",
      email: "pooja.desai@gmail.com",
      password: "$2b$10$poojahash123",
      profile_pic: "/uploads/users/pooja.jpg",
    },
    {
      username: "vikas_naik",
      email: "vikas.naik@gmail.com",
      password: "$2b$10$vikashash123",
      profile_pic: "/uploads/users/vikas.jpg",
    },
  ]);

  console.log("✅ User dummy data inserted");
};

export default seedUsers;
