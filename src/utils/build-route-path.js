// /tasks/:id

export function buildRoutePath(path) {
    const routeParameterRegex = /:([a-zA-Z]+)/g;
    const paramsWithParams = path.replaceAll(routeParameterRegex, "(?<$1>[a-z0-9\-_]+)");

    const pathRegex = new RegExp(`^${paramsWithParams}(?<query>\\?(.*))?$`);

    return pathRegex;
}