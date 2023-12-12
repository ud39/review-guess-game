import grpc
from concurrent import futures
from proto.steam_scraper_pb2 import (GameNameRequest, AppIdRequest, NReviewsRequest, NAppIdsRequest, AppInfoResponse, ReviewsWithTitleResponse, Review, AppIdsResponse, ReviewsResponse) # type: ignore
from proto.steam_scraper_pb2_grpc import SteamServiceServicer, add_SteamServiceServicer_to_server



from steam_scraper import get_app_id, get_app_title, get_reviews, get_n_reviews, get_n_appids 

class SteamServicer(SteamServiceServicer):
    def GetAppId(self, request, context):
        game_name = request.game_name
        app_id, title = get_app_id(game_name)
        return AppInfoResponse(app_id=app_id, title=title)

    def GetAppTitle(self, request, context):
        app_id = request.app_id
        title = get_app_title(app_id)
        return AppInfoResponse(app_id=app_id, title=title)

    def GetReviews(self, request, context):
        app_id = request.app_id
        reviews = get_reviews(app_id)
        return ReviewsResponse(review=reviews)

    def GetNReviews(self, request, context):
        app_id = request.app_id
        n = request.n
        reviews, title = get_n_reviews(app_id, n)
        return ReviewsWithTitleResponse(title=title, review=reviews)

    def GetNAppIds(self, request, context):
        n = request.n
        filter_by = request.filter_by
        app_ids = get_n_appids(n, filter_by)
        return AppIdsResponse(app_id=app_ids)

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    add_SteamServiceServicer_to_server(SteamServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    print(f"Starting server on 50051")
    serve()
