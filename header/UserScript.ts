export enum RunAt{
    /**
     * 脚本将尽快注入。
     */
    document_start = 'document-start'  ,
    /**
     * 如果正文元素存在，将注入脚本。
     */
    document_body = 'document-body',
    /**
     * 在调度 DOM内容加载事件时或之后，将注入脚本。
     */
    document_end = 'document-end',
    /**
     * 在调度 DOM内容加载事件后，将注入脚本。
     * 如果未给出@run时标记，则这是默认值。
     */
    document_idle = 'document-idle',
    /**
     * 如果在浏览器上下文菜单上单击脚本(仅在基于桌面chrome的浏览器上)，脚本将被注入。
     * 注意:如果使用这个值，所有的@include和@exclude语句都将被忽略，但是这在将来可能会改变。
     */
    context_menu = 'context-menu'
}

export enum GmFunctions {
    unsafeWindow,
    addStyle,
    addElement,
    deleteValue,
    listValues,
    addValueChangeListener,
    removeValueChangeListener,
    setValue,
    getValue,
    log,
    getResourceText,
    getResourceURL,
    registerMenuCommand,
    unregisterMenuCommand,
    openInTab,
    xmlhttpRequest,
    download,
    getTab,
    saveTab,
    getTabs,
    notification,
    setClipboard,
    info
}

export interface UserScript{
    /**
     * 脚本名称
     */
    name ?: string;
    /**
     * 脚本的命名空间网址
     */
    namespace?: string;
    /**
     * 脚本的版本号
     * 这用于更新检查，以防脚本未从userscript.org安装，或者 TM 检索脚本元数据时出现问题。
     */
    version?: string;
    /**
     * 脚本的作者
     */
    author?: string;
    /**
     * 脚本简单的描述，不要出现换行符
     */
    description ?: string;
    /**
     * 在选项页中使用的作者主页从脚本名称链接到给定页面。请注意，如果@namespace标签以"http://"开头，其内容也将用于此。
     */
    homepage ?: string;
    /**
     * 低分辨率下的脚本图标。
     */
    icon ?: string;
    /**
     * 脚本图标，64*64
     */
    icon64?: string;
    /**
     * 脚本更新url，
     * 使用此字段时，version字段必填
     */
    updateURL ?: string;
    /**
     * 脚本支持url
     */
    supportURL ?: string;
    /**
     * 定义当检测到更新时将从其中下载脚本的URL。如果使用none值，则不会执行更新检查。
     */
    downloadURL ?: string;
    /**
     * 该脚本应运行的页面。允许多个标记实例。
     * 请注意，@include不支持 URL 哈希参数。
     */
    includes ?: string[];
    /**
     * 或多或少等于@include标记。
     * 参考信息： http://code.google.com/chrome/extensions/match_patterns.html
     */
    matches ?: string[];
    /**
     * 排除 URL，即使它们也包含在@include或@match。
     */
    excludes ?: string[];
    /**
     * 指向在脚本本身开始运行之前加载并执行的JavaScript文件
     * 注意:通过@require加载的脚本及其“use strict”语句可能会影响userscript的strict模式!
     * 例子
     * https://code.jquery.com/jquery-2.1.4.min.js
     */
    requires ?: string[];
    /**
     * 通过脚本预加载可以通过GM_getResourceURL和GM_getResourceText访问的资源。
     * 例子：
     * icon1 http://www.tampermonkey.net/favicon.ico
     * html http://www.tampermonkey.net/index.html
     * 详情参考：https://www.tampermonkey.net/documentation.php?ext=dhdg#Subresource_Integrity
     */
    resources?: string[];
    /**
     * 此标记定义域（无顶级域），包括允许通过GM_xmlhttpRequest检索的子域
     * <value>可以具有以下值：
     * 像 tampermonkey.net 这样的域(这也将允许所有子域)
     * 子域即 safari.tampermonkey.net
     * 将脚本当前运行的域列入白名单
     * localhost 访问本地主机
     * 1.2.3.4 连接到一个IP地址
     *
     */
    connect?: string[];
    /**
     * 定义脚本被注入的时刻。
     * 与其他脚本处理程序相反，@run-at定义了脚本想要运行的第一个可能时刻。
     * 这意味着可能会发生这样的情况，使用@require标记的脚本可能会在文档已经加载之后执行，因为获取所需的脚本需要很长时间。
     * 无论如何，在给定的注入时刻之后发生的所有domnodeinsert和DOMContentLoaded事件都会被缓存，并在注入脚本时交付给脚本。
     */
    runAt ?: RunAt;
    /**
     * @grant用于将GM_ *函数，unsafeWindow对象和一些强大的窗口函数列入白名单。
     * 如果没有给出@grant，会自动给与以下权限
     * @link GmFunctions.setValue
     * @link GmFunctions.getValue
     * @link GmFunctions.setClipboard
     * @link GmFunctions.unsafeWindow
     * window.close
     * window.focus
     * window.onurlchange
     */
    grants ?: (GmFunctions | string)[] | 'none';
    /**
     * 此标记使脚本在主页上运行，但不是在 iframe 上运行。
     */
    noframes ?: boolean;

    /**
     * 目前，TM试图通过查找@match标记来检测是否使用了谷歌Chrome/Chromium编写的脚本，但并不是每个脚本都使用它。
     * 这就是为什么TM支持这个标签来禁用所有可能需要的优化来运行为Firefox/Greasemonkey编写的脚本。
     * 要保持此标记的可扩展性，可以添加可由脚本处理的浏览器名称。
     */
    nocompat?: string;
}
