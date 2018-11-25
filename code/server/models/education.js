module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define(
    "Education",
    {
      majorTitle: { type: DataTypes.STRING },
      briefDescription: { type: DataTypes.STRING },
      institution: { type: DataTypes.STRING },
      startYear: { type: DataTypes.INTEGER },
      endYear: { type: DataTypes.INTEGER },
      level: { type: DataTypes.STRING }
    },
    {}
  );
  Education.associate = function(models) {
    // associations can be defined here
  };
  return Education;
};
