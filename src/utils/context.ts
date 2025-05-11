import { v4 as uuidv4 } from 'uuid';

class RequestContext {
    private static instance: RequestContext;
    private correlationId: string;
    private requestId: string;
    private userId?: string;

    private constructor() {
        this.correlationId = uuidv4();
        this.requestId = uuidv4();
    }

    public static getInstance(): RequestContext {
        if (!RequestContext.instance) {
            RequestContext.instance = new RequestContext();
        }
        return RequestContext.instance;
    }

    public setCorrelationId(id: string): void {
        this.correlationId = id;
    }

    public getCorrelationId(): string {
        return this.correlationId;
    }

    public setRequestId(id: string): void {
        this.requestId = id;
    }

    public getRequestId(): string {
        return this.requestId;
    }

    public setUserId(id: string): void {
        this.userId = id;
    }

    public getUserId(): string | undefined {
        return this.userId;
    }

    public getContext(): Record<string, string> {
        return {
            correlationId: this.correlationId,
            requestId: this.requestId,
            ...(this.userId && { userId: this.userId }),
        };
    }
}

export default RequestContext; 