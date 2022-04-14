import { AuthUserDto } from './dto/auth.user.dto';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: AuthUserDto): Promise<{
        access_token: string;
    }>;
}
