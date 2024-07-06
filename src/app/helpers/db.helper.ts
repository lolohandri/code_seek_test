type WithId = {id: number};

export const getById = <T extends WithId>(id: number, key: string) : T | undefined=> {
  return getAllData<T>(key)?.find(item => item.id === id);
}

export const getAllData = <T>(key: string): T[] => {
  let data = localStorage.getItem(key);
  if(data)
    return JSON.parse(data);
  return []
}

export const saveData = <T>(key: string, data: T) : void => {
    localStorage.setItem(key, JSON.stringify(data));
}
