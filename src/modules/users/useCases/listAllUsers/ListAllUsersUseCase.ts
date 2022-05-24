import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error(
        "The informed user id does not belong to any existing user."
      );
    }

    if (!user.admin) {
      throw new Error("The informed user id corresponds to a non-admin user.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
