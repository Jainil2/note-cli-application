export const listNotes = (notes) => {
  if (notes.length === 0) {
    console.log("No notes found matching the filter.");
  } else {
    notes.forEach(note => {
      console.log('\n');
      console.log('id: ', note.id);
      console.log('tags: ', note.tags.join(', '));
      console.log('note: ', note.content);
    });
  }
};
