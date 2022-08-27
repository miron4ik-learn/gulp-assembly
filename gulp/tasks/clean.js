import { deleteAsync } from 'del'

export default () => {
  return deleteAsync($.path.clean)
}