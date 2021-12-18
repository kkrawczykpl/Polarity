interface Window {
    /**
     * Expose Environment versions.
     * @example
     * console.log( window.versions )
     */
    readonly versions: NodeJS.ProcessVersions;
    /**
     * Safe expose node.js API
     * @example
     * window.nodeCrypto('data')
     */
    readonly nodeCrypto: { sha256sum(data: import("crypto").BinaryLike): string; };
    /**
     * Expose "darkMode" object used to switch dark/light theme.
     * Default theme is "System theme" that is
     * determined by the operating system theme.
     * @example
     * console.log( window.darkMode )
     */
    readonly darkMode: { toggle: () => Promise<any>; system: () => Promise<any>; };
}
