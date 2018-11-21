module.exports = (sequelize, DataTypes) => {
  const About = sequelize.define(
    "About",
    {
      brief_description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nick_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: DataTypes.STRING
      },
      address: { type: DataTypes.STRING },
      phone_number: { type: DataTypes.STRING },
      nationality: { type: DataTypes.STRING }
    },
    {}
  );
  About.associate = function(models) {
    // associations can be defined here
  };
  return About;
};
