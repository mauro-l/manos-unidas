class UserModel {
    constructor(id, name, email, role, token) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.token = token;
    }

    static fromApiResponse(response) {
        const { user, role, token } = response;
        return new UserModel(user.id, user.nombre || user.email, user.email, role, token);
    }
}

export default UserModel;
