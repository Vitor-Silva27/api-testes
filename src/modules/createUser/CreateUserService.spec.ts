import { User } from "../../entities/User";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserService } from "./CreateUserService";

describe("Create user", () => {

    it('should be able to create a new user', async () => {
        const usersRepository = new UsersRepositoryInMemory();
        const createUserService = new CreateUserService(usersRepository);
        const userData:User = {
            name: "Test Name",
            email: "test@test.com",
            username: "testusername"                                                                                                                                            
        }
        const user = await createUserService.execute(userData);
        
        expect(user).toHaveProperty("id");
    });

});