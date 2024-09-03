class UserService {
    constructor(db) {
        this.client = db.sequelize
        this.User = db.User
    }

    async create(email, password) {
        return this.User.create(
            {
                email: email,
                password: password
            }
        ) 
    }

    async getOne(userEmail) {
		const user = await this.User.findOne({
			where: {
				email: userEmail,
			},
		});
		return user;
	}

}

module.exports = UserService