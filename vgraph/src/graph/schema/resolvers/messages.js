export async function getMessages(root, args, ctx) {
  return [
    {id: 1, name: 'message 1'},
    {id: 2, name: 'message 2'}
  ];
}
