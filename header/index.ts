import {GmFunctions, RunAt, UserScript} from "./UserScript";

const script: UserScript = {
    name: 'hello world',
    namespace: 'https://github.com/xcr1234',
    description: '一个hello world，油猴脚本脚手架',
    version: '1.0.0',
    includes: ['*://*'],
    grants: [
        GmFunctions.unsafeWindow
    ],
    runAt: RunAt.document_end
}

export default script