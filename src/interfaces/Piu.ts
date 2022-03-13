import PiuLike from "./PiuLike";
import User from "./User";

export default interface Piu {
    id: string;
    user: User;
    likes: PiuLike[];
    text: string;
    created_at: Date;
    updated_at: Date;
}
