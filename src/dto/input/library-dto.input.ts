import {Status} from "../../utils/status.utils";

export type AddToLibraryInput = {
	bookId: number;
	reviewId?: number;
	status?: Status;
}

export type RemoveFromLibraryInput = {
	libraryLineId: number;
}
