import type { FileType, FolderType } from './types';

export class FileData implements FileType {
	constructor(public name: string, public fileUrl: string) {}
}

export class FolderData implements FolderType {
	constructor(
		public name: string,
		public children: (FileData | FolderData)[]
	) {}
}
