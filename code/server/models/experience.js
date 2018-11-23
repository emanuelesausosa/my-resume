module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define(
    "Experience",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      startDate: { type: DataTypes.DATE, allowNull: false },
      endDate: { type: DataTypes.DATE },
      briefDescription: { type: DataTypes.STRING, allowNull: false },
      companyName: { type: DataTypes.STRING, allowNull: false },
      companyItem: { type: DataTypes.STRING },
      companyLogo: { type: DataTypes.STRING },
      current: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {}
  );
  Experience.associate = function(models) {
    // associations can be defined here
  };
  return Experience;
};
