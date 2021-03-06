import * as dotenv from 'dotenv';
import { NamespaceHttp, UInt64, NamespaceId } from 'nem2-sdk';
import { mergeMap } from 'rxjs/operators';

dotenv.config();

const namespaceHttp = new NamespaceHttp(process.env.API_ENDPOINT);

const id = UInt64.fromHex('85BBEA6CC462B244');
const ids: number[] = [id.lower, id.higher];
const namespaceId = new NamespaceId(ids);

namespaceHttp.getNamespacesName([namespaceId]).pipe(
  mergeMap((_) => _)
).subscribe(x => {
  console.log(`id: ${x.namespaceId.id}`)
  console.log(`name: ${x.name}`);
  if (x.parentId) {
    console.log(`parentId: ${x.parentId.id}`)
  }
  console.log('-----------------');
});
