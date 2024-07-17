/*
unsafeWindow 对象提供对页面 javascript 函数和变量的完全访问。
* */
declare var unsafeWindow: Window;

/*
获取有关脚本和 TM 的一些信息。
* */
declare var GM_info: {
    version: string,
    scriptWillUpdate: boolean,
    scriptHandler: "Tampermonkey",
    scriptUpdateURL?: string,
    scriptSource: string,
    scriptMetaStr?: string,
    isIncognito: boolean,
    downloadMode: "native" | "disabled" | "browser",
    script: {
        author?: string,
        description?: string,
        excludes: string[],
        homepage?: string,
        icon?: string,
        icon64?: string,
        includes?: string[],
        lastModified: number,
        matches: string[],
        name: string,
        namespace?: string,
        position: number,
        "run-at": string,
        resources: string[],
        unwrap: boolean,
        version: string,
        options: {
            awareOfChrome: boolean,
            run_at: string,
            noframes?: boolean,
            compat_arrayLeft: boolean,
            compat_foreach: boolean,
            compat_forvarin: boolean,
            compat_metadata: boolean,
            compat_uW_gmonkey: boolean,
            override: {
                orig_excludes: string[],
                orig_includes: string[],
                use_includes: string[],
                use_excludes: string[],
                [key: string]: any,
            },
            [key: string]: any,
        },
        [key: string]: any,
    },
    [key: string]: any,
};

/*
将给定的样式添加到文档并返回注入的样式元素。
* */
declare function GM_addStyle(css: string): void;

/*
创建一个由“tag_name”指定的 HTML 元素并应用所有给定的“属性”并返回注入的 HTML 元素。
* */
declare function GM_addElement(tag_name: string, attributes: object)

/*
创建一个由“tag_name”指定的 HTML 元素并应用所有给定的“属性”并返回注入的 HTML 元素。如果给出了“parent_node”，则将其附加到它或以其他方式附加到文档头或体。
* */
declare function GM_addElement(parent_node: HTMLElement, tag_name: string, attributes: object)

/*
从存储中删除“名称”。
* */
declare function GM_deleteValue(name: string): void;

/*
列出存储的所有名称。
* */
declare function GM_listValues(): string[];

/*
将更改侦听器添加到存储并返回侦听器 ID。
'name' 是观察变量的名称。
回调函数的“remote”参数显示该值是从另一个选项卡的实例 (true) 还是在此脚本实例 (false) 中修改的。
因此，不同浏览器选项卡的脚本可以使用此功能相互通信。
* */
declare function GM_addValueChangeListener(name: string, listener: GM_Types.ValueChangeListener): number;

/*
按 ID 删除更改​​侦听器。
* */
declare function GM_removeValueChangeListener(listenerId: number): void;

/*
设置本地存储'name'的值。
* */
declare function GM_setValue(name: string, value: any): void;

/*
从存储中获取 'name' 的值。
* */
declare function GM_getValue(name: string, defaultValue ?: any): any;

/*
将消息打印到控制台。
* */
declare function GM_log(message: string): any;

/*
获取脚本头中预定义的@resource 标记的内容。
* */
declare function GM_getResourceText(name: string): string;

/*
获取脚本标头处预定义 @resource 标记的 base64 编码 URI。
* */
declare function GM_getResourceURL(name: string): string;

/*
在运行此脚本的页面的 Tampermonkey 菜单中注册要显示的菜单，并返回菜单命令 ID。
* */
declare function GM_registerMenuCommand(name: string, listener: Function, accessKey ?: string): number;

/*
使用给定的菜单命令 ID 取消注册先前由 GM_registerMenuCommand 注册的菜单命令。
* */
declare function GM_unregisterMenuCommand(id: number): void;

/*
使用此 url 打开一个新选项卡。
* */
declare function GM_openInTab(url: string, options: GM_Types.OpenTabOptions): void;
/*
使用此 url 打开一个新选项卡。
* */
declare function GM_openInTab(url: string, loadInBackground: boolean): void;
/*
使用此 url 打开一个新选项卡。
* */
declare function GM_openInTab(url: string): void;

/*
创建一个 xmlHttpRequest。
* */
declare function GM_xmlhttpRequest<CONTEXT_TYPE>(details: GM_Types.XHRDetails<CONTEXT_TYPE>): GM_Types.AbortHandle<void>;

/*
将给定的 URL 下载到本地磁盘。
* */
declare function GM_download(details: GM_Types.DownloadDetails): GM_Types.AbortHandle<boolean>;
/*
将给定的 URL 下载到本地磁盘。
* */
declare function GM_download(url: string, filename: string): GM_Types.AbortHandle<boolean>;

/*
只要此选项卡处于打开状态，就获取一个持久对象。
* */
declare function GM_getTab(callback: (obj: object) => any): void;

/*
保存选项卡对象以在页面卸载后重新打开它。
* */
declare function GM_saveTab(obj: object): void;

/*
获取所有选项卡对象作为散列以与其他脚本实例通信。
* */
declare function GM_getTabs(callback: (objs: { [key: number]: object }) => any): void;

/*
显示 HTML5 桌面通知和/或突出显示当前选项卡。
* */
declare function GM_notification(details: GM_Types.NotificationDetails, ondone: Function): void;
/*
显示 HTML5 桌面通知和/或突出显示当前选项卡。
* */
declare function GM_notification(text: string, title: string, image: string, onclick: Function): void;

/*
将数据复制到剪贴板。参数 'info' 可以是像“{ type: 'text', mimetype: 'text/plain'}”这样的对象，或者只是一个表示类型的字符串（“text”或“html”）。
* */
declare function GM_setClipboard(data: string, info ?: string | { type?: string, mimetype?: string }): void;

declare namespace GM_Types {

    type ValueChangeListener = (name: string, oldValue: any, newValue: any, remote: boolean) => any;

    interface OpenTabOptions {
        active?: boolean,
        insert?: boolean,
        setParent?: boolean
    }

    interface XHRResponse<CONTEXT_TYPE> extends Function {

        DONE: 4,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        OPENED: 1,
        UNSENT: 0

        context: CONTEXT_TYPE,
        finalUrl: string,
        readyState: 0 | 1 | 2 | 3 | 4,
        responseHeaders: string,
        status: number,
        statusText: string,
        response: string | null,
        responseText: string,
        responseXML: Document | null
    }

    interface XHRProgress<CONTEXT_TYPE> extends XHRResponse<CONTEXT_TYPE> {
        done: number,
        lengthComputable: boolean,
        loaded: number,
        position: number,
        total: number,
        totalSize: number
    }

    type Listener<OBJ> = (this: OBJ, event: OBJ) => any;

    interface XHRDetails<CONTEXT_TYPE> {
        method?: "GET" | "HEAD" | "POST",
        url?: string,
        headers?: { readonly [key: string]: string },
        data?: string,
        binary?: boolean,
        timeout?: number,
        context?: CONTEXT_TYPE,
        responseType?: "arraybuffer" | "blob" | "json",
        overrideMimeType?: string,
        anonymous?: boolean,
        fetch?: boolean,
        username?: string,
        password?: string,

        onload?: Listener<XHRResponse<CONTEXT_TYPE>>,
        onloadstart?: Listener<XHRResponse<CONTEXT_TYPE>>,
        onprogress?: Listener<XHRProgress<CONTEXT_TYPE>>,
        onreadystatechange?: Listener<XHRResponse<CONTEXT_TYPE>>,
        ontimeout?: Listener<Function>,
        onabort?: Function,
        onerror?: Function
    }

    interface AbortHandle<RETURN_TYPE> {
        abort(): RETURN_TYPE
    }

    interface DownloadError {
        error: "not_enabled" | "not_whitelisted" | "not_permitted" | "not_supported" | "not_succeeded",
        details?: string
    }

    interface DownloadDetails {
        url: string,
        name: string,
        headers?: { readonly [key: string]: string },
        saveAs?: boolean,
        timeout?: number,
        onerror?: Listener<DownloadError>,
        ontimeout?: Listener<object>,
        onload?: Listener<object>,
        onprogress?: Listener<XHRProgress<void>>
    }

    interface NotificationThis extends NotificationDetails {
        id: string
    }

    type NotificationOnClick = (this: NotificationThis) => any;
    type NotificationOnDone = (this: NotificationThis, clicked: boolean) => any;

    interface NotificationDetails {
        text?: string,
        title?: string,
        image?: string,
        highlight?: boolean,
        timeout?: number
        onclick?: NotificationOnClick,
        ondone?: NotificationOnDone,
    }
}
