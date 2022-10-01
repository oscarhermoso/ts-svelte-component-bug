type NodeType = {
	name: string;
};

export type FileType = NodeType & {
	fileUrl: string;
};

export type FolderType = NodeType & {
	children: (File | Folder)[];
};
