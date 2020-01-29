export const inc = () => {
    return { type: 'INC' }; 
};
  
export const dec = () => {
    return { type: 'DEC' }; 
};
  
export const rnd = () => {
    const payload = Math.floor(Math.random()*10);
    return { type: 'RND', payload }; 
};