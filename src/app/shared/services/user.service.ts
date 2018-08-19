import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../interfaces/user";

@Injectable()
export class UserService {

	constructor(protected http: HttpClient) {}

	private userUrl = "https://jsonplaceholder.typicode.com/users/";

	getAllUsers(): Observable<User[]> {
		return(this.http.get<User[]>(this.userUrl));
	}
}