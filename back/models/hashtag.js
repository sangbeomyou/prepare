module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', { 
        // id: {}, id 기본적으로 들어있다 
        name: {
            type: DataTypes.STRING(20), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, // 필수
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 한글 이모티콘 저장
    });
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post);
    };
    return Hashtag;
};