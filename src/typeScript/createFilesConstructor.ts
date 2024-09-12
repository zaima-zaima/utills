export interface Constructor {
  name: string;
  type: "file" | "directory";
  file?: File;
  children?: Constructor[];
}

function withDrawFile(data: FileSystemFileEntry) {
  return new Promise((resolve) => {
    data.file((f) => {
      resolve(f);
    });
  }) as Promise<File>;
}

function create(data: FileSystemDirectoryEntry, contain: Constructor[]) {
  let count = 1;
  let end = false;
  if (!data.isDirectory && count === 1) {
    // 第一次没有获取到文件夹
    return [];
  }

  if (end) {
    // 空文件夹
    return [];
  }

  return new Promise((resolve) => {
    const read = data.createReader();

    read.readEntries(async (files: FileSystemFileEntry[]) => {
      if (files.length === 0) {
        end = true;
      }

      for (let i = 0; i < files.length; i++) {
        if (files[i].isFile) {
          //当前循环的是文件
          const file = await withDrawFile(files[i]);
          contain.push({ name: files[i].name, type: "file", file: file });
        } else {
          // 当前是文件夹

          const item = {
            name: files[i].name,
            type: "directory",
            children: [],
          } as Constructor;

          contain.push(item);

          create(
            files[i] as unknown as FileSystemDirectoryEntry,
            item.children
          );
        }
        count = count + 1;
      }

      resolve(contain);
    });
  });
}

export async function createFileConstructor(data: FileSystemDirectoryEntry) {
  const resp = await create(data, []);

  return resp;
}
