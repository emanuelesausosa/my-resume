module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define(
    "Skill",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      percentage: { type: DataTypes.INTEGER },
      yearsOn: { type: DataTypes.INTEGER },
      type: { type: DataTypes.STRING }
    },
    {}
  );
  Skill.associate = function(models) {
    // associations can be defined here
  };
  return Skill;
};
