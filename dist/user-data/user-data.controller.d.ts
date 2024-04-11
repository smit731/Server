import { UserDataService } from './user-data.service';
import { userdata } from './schemas/userdata.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserDataController {
    private userDataService;
    constructor(userDataService: UserDataService);
    getAllUser(): Promise<userdata[]>;
    createUser(b: CreateUserDto): Promise<userdata>;
    getUser(userName: string): Promise<userdata>;
    updateUser(userName: string, b: UpdateUserDto): Promise<userdata>;
    deleteUser(userName: string): Promise<userdata>;
}
