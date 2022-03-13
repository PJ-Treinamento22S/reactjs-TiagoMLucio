import Piu from "./Piu";
import User from "./User";

export default interface PiuLike {
    id: string;
    user: User;
    piu: Piu;
}