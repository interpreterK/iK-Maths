--[[
- Ray Marching
- @Author: interpreterK
https://www.desmos.com/calculator/fc191j1w4k
]]
local RayMarch = {}
RayMarch.__index = RayMarch

function RayMarch.new(X, Y, Z)
    return setmetatable({
        X = X or 0,
        Y = Y or 0,
        Z = Z or 0
    }, RayMarch)
end

--M_D: March_Data
--[[March_Data REF array: {
    B1={X=X, Y=Y, Z=Z},
    B2={X=X, Y=Y, Z=Z},
    B3={X=X, Y=Y, Z=Z},
    Size=Size
}]]
function RayMarch:Ball_2D(M_D)
    return (((M_D.B1.X-self.X)^2+(M_D.B1.Y-self.Y)^2) --Ball1 (Intersect)
            *(M_D.B2.X-self.X)^2+(M_D.B2.Y-self.Y)^2  --Ball2 (Intersect)
            *(M_D.B3.X-self.X)^2+(M_D.B3.Y-self.Y)^2) --Ball3 (Intersect)
            *(M_D.Size or 500)                        --Size
    -- You can keep extending it supports unlimited.
end

function RayMarch:Ball_3D(M_D)
    return (((M_D.B1.X-self.X)^2+(M_D.B1.Y-self.Y)^2+(M_D.B1.Z-self.Z)^2) --Ball1 (Intersect)
            *(M_D.B2.X-self.X)^2+(M_D.B2.Y-self.Y)^2+(M_D.B2.Z-self.Z)^2  --Ball2 (Intersect)
            *(M_D.B3.X-self.X)^2+(M_D.B3.Y-self.Y)^2+(M_D.B3.Z-self.Z)^2) --Ball3 (Intersect)
            *(M_D.Size or 500)                                            --Size
    -- You can keep extending it supports unlimited.
end

return RayMarch