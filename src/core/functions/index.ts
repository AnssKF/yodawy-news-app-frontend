export const truncateText = (text: string, charlimit: number): string => {
    if (!text || text.length <= charlimit) {
        return text;
    }
    let shortened = text.substring(0, charlimit) + "...";
    return shortened;
}